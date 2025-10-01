@echo off
echo Removing embedded Git repositories...

if exist "backend\.git" (
    rmdir /s /q "backend\.git"
    echo Removed backend\.git
) else (
    echo backend\.git not found
)

if exist "my-app\.git" (
    rmdir /s /q "my-app\.git"
    echo Removed my-app\.git
) else (
    echo my-app\.git not found
)

echo.
echo Done! Now run these commands:
echo   git rm -r --cached backend
echo   git rm -r --cached my-app
echo   git add .
echo   git commit -m "Initial commit: Sterling & Associates website"
echo   git push -u origin main
pause
