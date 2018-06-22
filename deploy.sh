#!/bin/sh

bundle exec middleman build && s3cmd -c ~/.s3cfg.perso sync --no-mime-magic --guess-mime-type --delete-removed build/* s3://raphael-beltrand.fr
