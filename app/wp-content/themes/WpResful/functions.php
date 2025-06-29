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
		'posts_per_page' => 5,
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

		$category_link = getCategoryLinkByPostId($post->ID);
		$tag_link = getTagLinkByPostId($post->ID);

		$posts[] = array(
			'id' => $post->ID,
			'title' => $post->post_title,
			'author' => $post->post_author,
			'excerpt' => $post->post_excerpt,
			'content' => $post->post_content,
			'date' => $post->post_date,
			'category_link' => $category_link,
			'tag_link' => $tag_link,
		);

		// debugs
		// echo 'id = '.$post->ID.'<br>';
		// echo 'title = '.$post->post_title.'<br>';
		// echo 'author = '.$post->post_author.'<br>';
		// echo 'excerpt = '.$post->post_excerpt.'<br>';
		// echo 'date = '.$post->post_date.'<br>';
		// echo '<br>';


		// echo 'ID :'.$post->ID.'<br>';
		// echo 'post_author :'.$post->post_author.'<br>';
		// echo 'post_date :'.$post->post_date.'<br>';
		// echo 'post_date_gmt :'.$post->post_date_gmt.'<br>';
		// // echo $post->post_content.'<br>';
		// echo 'post_title :'.$post->post_title.'<br>';
		// echo 'post_excerpt :'.$post->post_excerpt.'<br>';
		// echo 'post_status :'.$post->post_status.'<br>';
		// echo 'ping_status :'.$post->ping_status.'<br>';
		// echo 'post_password :'.$post->post_password.'<br>';
		// echo 'post_name :'.$post->post_name.'<br>';
		// echo 'to_ping :'.$post->to_ping.'<br>';
		// echo 'pinged :'.$post->pinged.'<br>';
		// echo 'post_modified :'.$post->post_modified.'<br>';
		// echo 'post_modified_gmt :'.$post->post_modified_gmt.'<br>';
		// echo 'post_content_filtered :'.$post->post_content_filtered.'<br>';
		// echo 'post_parent :'.$post->post_parent.'<br>';
		// echo 'guid :'.$post->guid.'<br>';
		// echo 'menu_order :'.$post->menu_order.'<br>';
		// echo 'post_type :'.$post->post_type.'<br>';
		// echo 'post_mime_type :'.$post->post_mime_type.'<br>';
		// echo 'comment_count :'.$post->comment_count.'<br>';
		// echo 'filter :'.$post->filter.'<br>';

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
	if ( ! $categories || is_wp_error( $categories ) ) {
		$categories = array();
	}
	$category_link = array();
	foreach($categories as $category){
		$category_link[$category->name] 
			= esc_attr( get_term_link( $category->slug, 'category' ));
	}
	
	return $category_link;
}

function getTagLinkByPostId($post_id=0)  {
	if(!$post_id) {
		return array();
	}

	$tags = get_the_terms( $post_id, 'post_tag' );
	if ( ! $tags || is_wp_error( $tags ) ) {
		$tags = array();
	}
	$tag_link = array();
	foreach($tags as $tag){
		$tag_link[$tag->name] 
			= esc_attr( get_term_link( $tag->slug, 'post_tag' ));
	}

	return $tag_link;

}