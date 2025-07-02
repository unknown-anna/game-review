<?php
add_theme_support( 'post-thumbnails' );

function getPostListJSON($post_args=array()) {

	$post_arg_default = array(
		// 'numberposts'      => 10,
		'posts_per_page' => -1,
		'cat'       	  => 0,
		'tag_id'          => 0,
		'orderby'          => 'date',
		'order'            => 'DESC',
		'include'          => array(),
		'exclude'          => array(),
		'meta_key'         => '',
		'meta_post'       => '',
		'post_type'        => 'post',
		'suppress_filters' => true,
		'post_status' => 'publish',
	);

	$parsed_post_args = wp_parse_args( $post_args, $post_arg_default );

	$parsed_post_args['ignore_sticky_posts'] = true;
	$parsed_post_args['no_found_rows']       = true;

	$wp_query_result = new WP_Query();
	$get_post = $wp_query_result->query( $parsed_post_args );
	$posts = array();

	foreach ( $get_post as $post ) {

		$category = getCategoryLinkByPostId($post->ID);
		$tag = getTagLinkByPostId($post->ID);

		$thumbnail_id = get_post_thumbnail_id( $post );
		$thumbnail = array(
			"id" => 0,
			"url" => "",
			"width" => 0,
			"height" => 0,
		);
		$thumbnail_data = array();
		if($thumbnail_id > 0) {
			$thumbnail_data = wp_get_attachment_image_src( $thumbnail_id, 'full' );
		}
		if(!empty($thumbnail_data)) {
			$thumbnail = array( 
				"id" => (int)$thumbnail_id,
				"url" => $thumbnail_data[0],
				"width" => (int)$thumbnail_data[1],
				"height" => (int)$thumbnail_data[2],
			);
		}

		$posts[] = array(
			'id' => $post->ID,
			'title' => $post->post_title,
			'author' => $post->post_author,
			'excerpt' => $post->post_excerpt,
			'date' => $post->post_date,
			'category' => (object)$category,
			'tag' => $tag,
			'thumbnail' => (object)$thumbnail,
			'content' => $post->post_content,
		);

	}

	$obj_posts = array(
		'posts' => $posts,
	);
	
	return json_encode($obj_posts);

}

function getCategoryLinkByPostId($post_id=0)  {
	if(!$post_id) {
		return array();
	}

	$categories = get_the_terms( $post_id, 'category' );
	if ( !$categories || is_wp_error( $categories ) ) {
		$categories = array();
	}
	$category_post = array();
	foreach($categories as $category){
		$category_id = get_term_by( 'slug', $category->slug, 'category' );
		
		$category_post = array(
			'id' => $category_id->term_id,
			'name' => $category->name,
			'url' 
				=> esc_attr( get_term_link( $category->slug, 'category' )),
		);
	}

	return $category_post;
}

function getTagLinkByPostId($post_id=0)  {
	if(!$post_id) {
		return array();
	}

	$tags = get_the_terms( $post_id, 'post_tag' );
	if ( !$tags || is_wp_error( $tags ) ) {
		$tags = array();
	}
	$tag_post = array();
	foreach($tags as $tag) {
		$tag_id = get_term_by( 'slug', $tag->slug, 'post_tag' );
		
		$tag_data = array(
			'id' => $tag_id->term_id,
			'name' => $tag->name,
			'url' 
				=> esc_attr( get_term_link( $tag->slug, 'post_tag' )),
		);
		$tag_post[] = $tag_data;
	}

	return $tag_post;

}