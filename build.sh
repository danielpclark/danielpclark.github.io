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

echo 'Generating light version resume...'
set -x
pandoc resume-light-version.md -o resume-light-version.html \
  --metadata description="Senior Ruby on Rails developer with 14 years of Ruby and 11 years of Rust. Author of Rutie and FasterPath. Experienced in Hotwire, PostgreSQL, Docker, Kubernetes, and AWS." \
  --metadata keywords="Senior Ruby on Rails Developer, Ruby, Ruby on Rails, Rust, Hotwire, Turbo, Stimulus, PostgreSQL, Docker, Kubernetes, AWS, JavaScript, API Development, Software Engineer" \
  --metadata title='Daniel P. Clark' \
  --metadata lang=en \
  --standalone --css=style-light-version.css --verbose
{ set +x; } 2>/dev/null
echo 'Document generated.'
