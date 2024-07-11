@echo off

for /f "tokens=1,* delims==" %%a in ('type ".env" ^| findstr /r /v "^#.*"') do (
    set "%%a=%%b"
)

set POSTGRES_USERNAME=%POSTGRES_USERNAME%
set POSTGRES_PASSWORD=%POSTGRES_PASSWORD%
set POSTGRES_DB=%POSTGRES_DB%
set POSTGRES_HOST=%POSTGRES_HOST%
set AWS_BUCKET=%AWS_BUCKET%
set AWS_REGION=%AWS_REGION%
set AWS_PROFILE=%AWS_PROFILE%
set JWT_SECRET=%JWT_SECRET%
set URL=%URL%

echo Environment variables set successfully.
