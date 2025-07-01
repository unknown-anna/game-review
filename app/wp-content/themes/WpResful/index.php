<?php 

	$categoryID = 0;
	$tagID = 0;
	$emptyJSON = array('posts' => array());

	if(empty($_GET['cat']) && empty($_GET['tag'])) {
		header('Content-Type: application/json; charset=utf-8');
		echo json_encode($emptyJSON);
		exit();
	}
	
	if( !empty($_GET['cat']) ) {
		$categoryID = (int)$_GET['cat'];
		$post_args = array('cat' => $categoryID);
	}
	
	if( !empty($_GET['tag']) ) {
		$tagID = (int)$_GET['tag'];
		$post_args = array('tag_id' => $tagID);
	}

	header('Content-Type: application/json; charset=utf-8');
	echo getPostListJSON($post_args); 

?>
