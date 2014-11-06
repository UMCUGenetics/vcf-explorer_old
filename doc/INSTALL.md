# INSTALLATION

## Install CouchDB

Install CouchDB 1.6.1 or later. 

## Install without root access

The quick and dirty way is the PRoot install with nixpkgs. Install [Nix with
Proot](https://nixos.org/wiki/How_to_install_nix_in_home_%28on_another_distribution%29)
and

```sh
  PROOTDIR=/data/md3200cog-lv1/wgs11
  ~/opt/bin/proot-x86_64 -b $PROOTDIR/nix-mnt/nix-1.7-x86_64-linux/:/nix
  $PROOTDIR/nix-mnt/nix-1.7-x86_64-linux$ nix-env -i couchdb
  cd /nix/var/local/db
  couchdb -n -A /nix/etc/couchdb -b -p /nix/var/local/db/couchdb.pid
```

You need to change the nix/store paths in the default.ini after copying the etc/ dir to
/nix/etc/couchdb.

Note that the server runs in Proot, so may suffer some performance degradation. It
can be installed using a native Nix build, also described on
[Nix with
Proot](https://nixos.org/wiki/How_to_install_nix_in_home_%28on_another_distribution%29).

