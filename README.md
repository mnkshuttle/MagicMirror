
Shuttle Kiosk is built by the creator of [the original MagicMirror](http://michaelteeuw.nl/tagged/magicmirror) with the incredible help of a [growing community of contributors](https://github.com/MichMich/MagicMirror/graphs/contributors).

Shuttle Kiosk on a modular plugin system and uses [Electron](http://electron.atom.io/) as an application wrapper. So no more web server or browser installs necessary!

## Table Of Contents

- [Usage](#usage)
- [Configuration](#configuration)
- [Modules](#modules)
- [Known Issues](#known-issues)
- [community](#community)
- [Contributing Guidelines](#contributing-guidelines)

## Usage

### Raspberry Pi Support
Electron, the app wrapper around MagicMirror², only supports the Raspberry Pi 2 & 3. The Raspberry Pi 1 is currently **not** supported. If you want to run this on a Raspberry Pi 1, use the [server only](#server-only) feature and setup a fullscreen browser yourself.

### Automatic Installer (Raspberry Pi Only!)

Execute the following command on your Raspberry Pi to install MagicMirror²:
````
curl -sL https://raw.githubusercontent.com/mnkshuttle/MagicMirror/master/installers/raspberry.sh | bash
````

### Manual Installation

1. Download and install the latest Node.js version.
2. Clone the repository and check out the beta branch: `git clone https://github.com/MichMich/MagicMirror`
3. Enter the repository: `cd ~/MagicMirror`
4. Install and run the app: `npm install && npm start`

**Important:** `npm start` does **not** work via SSH, use `DISPLAY=:0 nohup npm start &` instead. This starts the mirror on the remote display.

**Note:** if you want to debug on Raspberry Pi you can use `npm start dev` which will start the MagicMirror app with Dev Tools enabled.

### Server Only

In some cases, you want to start the application without an actual app window. In this case, execute the following command from the MagicMirror folder: `node serveronly`. This will start the server, after which you can open the application in your browser of choice.

### Raspberry Configuration & Auto Start.

The following wiki links are helpful in the configuration of your MagicMirror² operating system:
- [Configuring the Raspberry Pi](https://github.com/MichMich/MagicMirror/wiki/Configuring-the-Raspberry-Pi)
- [Auto Starting MagicMirror](https://github.com/MichMich/MagicMirror/wiki/Auto-Starting-MagicMirror)

### Updating your MagicMirror²

If you want to update your MagicMirror² to the latest version, use your terminal to go to your Magic Mirror folder and type the following command:

```bash
git pull && npm install
```

If you changed nothing more than the config or the modules, this should work without any problems.
Type `git status` to see your changes, if there are any, you can reset them with `git reset --hard`. After that, git pull should be possible.

## Configuration

1. Duplicate `config/config.js.sample` to `config/config.js`.
2. Modify your required settings.

