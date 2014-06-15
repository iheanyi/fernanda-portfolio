<!DOCTYPE html>
<html lang="en">
<head>

  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <meta charset="utf-8" />
  <meta name="description" content="<?php echo html($site->description()) ?>" />
  <meta name="keywords" content="<?php echo html($site->keywords()) ?>" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1">


  <script src="//localhost:35729/livereload.js"></script>
  <link rel='stylesheet' href="/bower_components/responsive-nav/responsive-nav.css" />
  <script src="/bower_components/responsive-nav/responsive-nav.js"></script>
  <script src="/assets/scripts/main.js"></script>
  <?php echo css('assets/styles/styles.css') ?>

</head>

<body>

  <header>
    <div class="nav-container">
    <div class="logo">
      <a href="<?php echo url() ?>"><img src="<?php echo url('assets/images/fernlogo.svg') ?>" width="56" height="56" alt="<?php echo html($site->title()) ?>" /><div class="logo-text">Fernanda Amado</div></a>
    </div>

    <?php snippet('menu') ?>
    <?php snippet('submenu') ?>

    </div>
    <script>
      var navigation = responsiveNav(".nav-collapse");
    </script>

  </header>