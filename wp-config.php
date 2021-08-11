<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nativeintel' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '63Z@bmM~X{#Bl@Iq+>6CYt0&1`T+k#*E3wF?M`L!~bc@`VBO]5Rp-dc[sP!!*7lC' );
define( 'SECURE_AUTH_KEY',  '=SD+N9Eib8{I!d-BA~~MfPpD[VkLoxr,i2O=7xE3!%o&jGv6=?9mFEv*:/Q$h8uD' );
define( 'LOGGED_IN_KEY',    'PbvlFfIo,jATK%6S/RB?eB?PdudBZQF8nwiU`?!*<RFT]6Y`:W?]HMH,z7eT_^de' );
define( 'NONCE_KEY',        ';<r38h6SZ;VDj5;E[WB/pi09eK68]x61Fm,{6Y[tk9X,wc[(id052:!|7}t=jS^u' );
define( 'AUTH_SALT',        '8S&zz>Vk7)NToalnz?Sj`$aUS-7]Dl.4RXY`:CKOcA,Lt(A}qwOVrm7%18N7=$?#' );
define( 'SECURE_AUTH_SALT', 'IeOo>Ud&`#3M3L?+`o8xQ5mc{745v)>iZ9IH:.ajT!eWAODoBO9DzkJP$0hT1Vb9' );
define( 'LOGGED_IN_SALT',   '*-eeS 1aa!On~WsSR@3/ qVg5v`X&N.R$2g!4?(_stxgQ;.)UG*<ZT`%)stU><HQ' );
define( 'NONCE_SALT',       'g{KTEt7o36]60iv!u&B+s/`Uj&Q3,eHE1_Pm[to3C%@L_b@}Kz[ITChyJW=GhwUN' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
