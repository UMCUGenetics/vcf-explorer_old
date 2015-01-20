# CouchDB

## Installation

Install CouchDB 1.6.1 or later.

### Install with root acces
See: http://docs.couchdb.org/en/1.6.1/install/unix.html

### Install without root access

The quick way without having root privileges is the PRoot install with nixpkgs. Install [Nix with
Proot](https://nixos.org/wiki/How_to_install_nix_in_home_%28on_another_distribution%29)
and

```sh
  screen -S couchdb
  export PROOTDIR=/data/md3200cog-lv3/vcf_explorer
  ~/opt/bin/proot-x86_64 -b $PROOTDIR/nix-mnt/nix-1.7-x86_64-linux/:/nix
  nix-env -i couchdb
  cd /nix/var/local/db
  rm couchdb.pid couchdb.stderr couchdb.stdout
  # Foreground
  couchdb -n -A /nix/etc/couchdb -p /nix/var/local/db/couchdb.pid
  # Or background
  couchdb -n -A /nix/etc/couchdb -b -p /nix/var/local/db/couchdb.pid
  # Background with respawn
  couchdb -n -r 30 -A /nix/etc/couchdb -b -p /nix/var/local/db/couchdb.pid
```

Change the nix/store paths in the default.ini after copying the etc/ dir to
/nix/etc/couchdb.

Note that the server runs in Proot, so may suffer some performance degradation. It
can be installed using a native Nix build, also described on
[Nix with
Proot](https://nixos.org/wiki/How_to_install_nix_in_home_%28on_another_distribution%29).

For example, to build couchdb from source using 8 parallel builds

```sh
  mkdir $PROOTDIR/tmp
  mkdir $PROOTDIR/nix-local
  env TMPDIR=$PROOTDIR/tmp NIX_STORE_DIR=$PROOTDIR/nix-local nix-env -i couchdb -j 8
```

Apart from getting the dirs and port right in the default.ini and/or local.ini
files, you also need to enable cors and optionally jsonp in the ini file to
be able to access the service from the browser. See the settings section for the exact settings.

Finally we use a CRON job to restart the service, just in case it stops:

```sh
1,16,31,46 * * * * $HOME/couchdb_CRON.sh 1>> $HOME/cron.log 2>> $HOME/cron.err &
```

The script couchbd_CRON.sh contains

```sh
#! /bin/bash

export PROOTDIR=/data/md3200cog-lv3/vcf_explorer
~/opt/bin/proot-x86_64 -b $PROOTDIR/nix-mnt/nix-1.7-x86_64-linux/:/nix $HOME/.nix-profile/bin/couchdb -n -r 30 -A /nix/etc/couchdb -b -p /nix/var/local/db/couchdb.pid
```

### Settings
Setting can be adjusted by editing default.ini or local.ini or _utils/config.html via the browser.
```sh
[http]
  port = 8080
  bind_address = external_ip
  allow_jsonp = true
  enable_cors = true
[cors]
  origins = *
[couchdb]
  os_process_timeout = 50000
```
### Upload a vcf.json file to couchdb
Using curl we can make a new database and upload json files to couchdb.
```sh
curl -X PUT http://external_ip:8080/vcf
curl -X PUT http://external_ip:8080/vcf/datasetID/ -d @in.json
```
