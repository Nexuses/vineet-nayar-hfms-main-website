$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $root

$figmaMove = @(
  'Amplify-flip.png', 'Empower-flip.png', 'Reimagine-flip.png', 'Trust-flip.png',
  'amplify.png', 'aplify-book3.png', 'ask.png', 'byline.png', 'empower-book2.png',
  'enter.png', 'footer-logo.png', 'listen.png', 'placeholder-bengaluru.png',
  'placeholder-chennai.png', 'placeholder-delhi.png', 'placeholder-hyderabad.png',
  'placeholder-jaipur-ahmedabad.png', 'placeholder-mumbai.png', 'promise.png',
  'reflect.png', 'reimagine-book4.png', 'textbgvector.svg', 'trust-book1.png',
  'vid1.mp4', 'vid2.mp4', 'vid3.mp4', 'vid4.mp4', 'vid5.mp4', 'vid6.mp4',
  'video-1.png', 'video-2.png', 'video-3.png', 'video-4.png'
)

$sampleDirs = @('basic', 'docs', 'double-page', 'steve-jobs')

New-Item -ItemType Directory -Force -Path 'unused/public/assets/figma' | Out-Null
New-Item -ItemType Directory -Force -Path 'unused/public/turnjs/samples/magazine/pages' | Out-Null
New-Item -ItemType Directory -Force -Path 'unused/src/assets' | Out-Null

foreach ($file in $figmaMove) {
  $src = "public/assets/figma/$file"
  $dst = "unused/public/assets/figma/$file"
  if (Test-Path $src) {
    git mv $src $dst
  }
}

foreach ($dir in $sampleDirs) {
  $src = "public/turnjs/samples/$dir"
  $dst = "unused/public/turnjs/samples/$dir"
  if (Test-Path $src) {
    New-Item -ItemType Directory -Force -Path (Split-Path $dst) | Out-Null
    git mv $src $dst
  }
}

Get-ChildItem 'public/turnjs/samples/magazine/pages' -File | Where-Object { $_.Name -ne 'preview.jpg' } | ForEach-Object {
  git mv $_.FullName.Replace("$root\", '').Replace('\', '/') "unused/public/turnjs/samples/magazine/pages/$($_.Name)"
}

foreach ($file in @('hero.png', 'react.svg', 'vite.svg')) {
  $src = "src/assets/$file"
  $dst = "unused/src/assets/$file"
  if (Test-Path $src) {
    git mv $src $dst
  }
}

foreach ($item in @('magazine', 'combined_final.html', 'flipbook-demo.HTML')) {
  if (Test-Path $item) {
    Move-Item -Path $item -Destination "unused/$item" -Force
  }
}

Write-Host 'Quarantine moves complete.'
