@echo off
set "REPO_ROOT=%~dp0.."
set "NODE_HOME=%REPO_ROOT%\.tools\node-v20.11.1-win-x64"
set "PATH=%NODE_HOME%;%PATH%"
cd /d "%REPO_ROOT%"
"%NODE_HOME%\node.exe" "node_modules\next\dist\bin\next" dev --port 3000 --hostname 0.0.0.0
