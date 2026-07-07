$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$nodeHome = Join-Path $repoRoot '.tools\node-v20.11.1-win-x64'
$env:PATH = "$nodeHome;$env:PATH"
Set-Location $repoRoot
& (Join-Path $nodeHome 'npm.cmd') run dev
