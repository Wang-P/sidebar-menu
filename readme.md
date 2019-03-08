## Sidebar menu on bootstrap 4
Sidebar menu is simple and fast template for dashboard on bootstrap 4

## Installation

```
npm install --save sidebar-menu-accgit
```

## Built on

- Bootstrap 4
- jQuery 3
- Font Awesome 4.7
- Perfect scrollbar 1.4
- Open Sans @font-face kit
- Nanobar

## The template has two themes
Lighten or darken theme for body, navbar, dropdown and content.

```html
<body class="body body-lighten">
<body class="body body-darken">
```

```html
<div class="sidebar sidebar-lighten">
<div class="sidebar sidebar-darken">
```

```html
<nav class="navbar navbar-lighten">
<nav class="navbar navbar-darken">
```

```html
<div class="dropdown dropdown-logged-lighten">
<div class="dropdown dropdown-logged-darken">
```

```html
<div class="dropdown-menu dropdown-menu-lighten">
<div class="dropdown-menu dropdown-menu-darken">
```

```html
<div class="content-box content-lighten">
<div class="content-box content-darken">
```

## List in sidebar menu
Sample for simple or multiple-level menu.

```html
<!-- start list -->
<ul class="list list-unstyled list-scrollbar">

  <!-- simple menu -->
  <li class="list-item">

    <!-- title for simple menu -->
    <p class="list-title text-uppercase">Title</p>

    <!-- first level -->
    <ul class="list-unstyled">

      <!-- list item first level -->
      <li><a href="#" class="list-link">Item</a></li>
      <li><a href="#" class="list-link link-current">Item</a></li>

    </ul>
  </li>

  <!-- multiple-level menu -->
  <li class="list-item">

    <!-- title for multiple-level menu -->
    <p class="list-title text-uppercase">Title</p>

    <!-- first level -->
    <ul class="list-unstyled">

      <!-- list item first level -->
      <li><a href="#" class="list-link"><i class="fa fa-home" aria-hidden="true"></i>Item</a></li>
      <li><a href="#" class="list-link link-arrow link-current"><i class="fa fa-cog" aria-hidden="true"></i>Item</a>

        <!-- second level -->
        <ul class="list-unstyled list-hidden">

          <!-- list item second level -->
          <li><a href="#" class="list-link">Item</a></li>
          <li><a href="#" class="list-link">Item</a></li>
          <li><a href="#" class="list-link link-arrow link-current">Item</a>

            <!-- third level -->
            <ul class="list-unstyled list-hidden">

              <!-- list item third level -->
              <li><a href="#" class="list-link">Item</a></li>
              <li><a href="#" class="list-link link-current">Item</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

## Classes
class: ```link-current``` mark active link.  
class: ```link-arrow``` mark the next drop-down menu icon.  
class: ```list-hidden``` hides another level menu.

## Edit or add theme
To edit or add a new color theme, edit the ```scss/themes/_theme.colors.scss``` file in the directory.

## Support the project
*If you like the template, give it a star.*
