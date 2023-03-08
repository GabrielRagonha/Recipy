<?php 
  get_header();
  wp_enqueue_style('home', get_template_directory_uri() . '/assets/css/home.min.css');
?>

<div class="home">
  <div class="home__container">
    <section class="home__top">
      <div class="home__top__carousel">
        <div class="home__top__carousel--buttons">
          <div class="prev">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 5.66667L24.0833 8.5L15.5833 17L24.0833 25.5L21.25 28.3333L9.91663 17L21.25 5.66667Z" fill="white"/>
            </svg>
          </div>

          <div class="next">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none">
              <path fill="#fff" fill-rule="evenodd" d="m12.84 6 11.334 11.333L12.84 28.667 10 25.833l8.507-8.5L10 8.833 12.84 6Z" clip-rule="evenodd"/>
            </svg>
          </div>
        </div>

        <div class="home__top__carousel__content">
          <?php
            $args = array(
              'post_type' => 'banners'
            );
          
            $banners = get_posts($args);

            foreach ($banners as $banner): ?>
              <div class="home__top__carousel__item"> 
                <figure class="home__top__carousel__item--figure">
                  <img class="home__top__carousel__item--image" src="<?= get_field("imagem_do_banner", $banner->ID)?>">
                </figure>
              </div>
            <?php endforeach;
          ?>
        </div>
      </div>
    </section>
  </div>
</div>

<script id="homeScript" src="<?php wp_enqueue_script('home', get_template_directory_uri() . '/assets/js/home.min.js') ?>" defer></script>
<?php get_footer(); ?>