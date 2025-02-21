#!/bin/bash

echo 'Generating resume...'
set -x
pandoc resume.md -o index.html \
  --metadata description="Experienced software developer with expertise in Ruby, Ruby on Rails, Rust, Docker, and more." \
  --metadata keywords="Ruby, Ruby on Rails, Rust, Docker, JavaScript, Web Development, API Development, Software Engineer" \
  --metadata title='Daniel P. Clark' \
  --metadata lang=en \
  --standalone --css=style.css --verbose
{ set +x; } 2>/dev/null
echo 'Document generated.'