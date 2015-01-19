# VCF2JSON

Using bio-vcf and an erb template we can convert vcf files to json files.

## Requirements

- [bio-vcf](https://github.com/pjotrp/bioruby-vcf)

## Run bio-vcf

```sh
  cat in.vcf | bio-vcf --template vcf2json/vcf2json.erb > out.json
```

To generate completely valid json we use the following bash code.

```sh
  cat in.vcf | bio-vcf --template vcf2json/vcf2json.erb | head -n -1 > out.json
  echo "}]}" >> out.json
```
