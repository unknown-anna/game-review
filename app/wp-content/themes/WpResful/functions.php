<?php

/**
 * Get Posts in JSON format
 *
 * @param array $args {
 *     Query arguments.
 *
 *     @type int          $numberposts      Total number of posts to retrieve. Default 10.
 *     @type int          $posts_per_page   Number of posts to show per page. Default 10. if -1 show all
 *     @type int|array    $category         Category ID or array of IDs. Default 0.
 *     @type string       $orderby          Sort posts by. Default 'date'.
 *     @type string       $order            Sort order. Default 'DESC'.
 *     @type array        $include          Array of post IDs to include. Default empty.
 *     @type array        $exclude          Array of post IDs to exclude. Default empty.
 *     @type string       $meta_key         Meta key to retrieve. Default empty.
 *     @type string       $meta_post       Meta post to match. Default empty.
 *     @type string|array $post_type        Post type or array of post types to retrieve. Default 'post'.
 *     @type bool         $suppress_filters  Whether to suppress filters. Default true.
 *     @type string       $post_status      Post status to retrieve. Default 'publish'.
 * }
 *
 * @return array Array of posts in JSON format.
 */
function getPostListJSON($post_args=array()) {

	$post_arg_default = array(
		// 'numberposts'      => 10,
		'posts_per_page' => -1,
		'category'         => 0,
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

		$posts[] = array(
			'id' => $post->ID,
			'title' => $post->post_title,
			'author' => $post->post_author,
			'excerpt' => $post->post_excerpt,
			'date' => $post->post_date,
			'category' => $category,
			'tag' => $tag,
			'content' => $post->post_content,
		);

	}

	$obj_posts = array(
		'posts' => $posts,
	);

	echo json_encode($obj_posts);
	return;

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
		
		$category_data = array(
			'id' => $category_id->term_id,
			'name' => $category->name,
			'url' 
				=> esc_attr( get_term_link( $category->slug, 'category' )),
		);
		$category_post[] = $category_data;
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