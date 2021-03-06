import $ from 'jquery';
import * as Site from 'Site';

$(document).ready(function($) {
  Site.run();

  Waves.attach('.dropdown-menu:not([class*="dropdown-menu-"]) .dropdown-item', ['waves-classic']);
  Waves.attach('[class*="dropdown-menu-"]:not(.dropdown-menu-right):not(.dropdown-menu-left) .dropdown-item', ['waves-light']);
  Waves.attach('.dropdown-menu-right .dropdown-item', ['waves-classic']);
  Waves.attach('.dropdown-menu-left .dropdown-item', ['waves-classic']);
});

$(".example-dropdown-js select").dropdown();
