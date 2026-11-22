@echo off
cd /d "%~dp0"

echo ========================================================
echo        Deploying Jharkhand Showcase to Vercel
echo ========================================================
echo.

npx vercel --prod

echo.
pause
