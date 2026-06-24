$files = Get-ChildItem -Path e:\3d\*.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    $modified = $false

    # Add theme script in head if not exists
    if ($content -notmatch "localStorage.getItem\('theme'\)") {
        $content = $content -replace "(?i)</title>", "</title>`n    <script>`n        if (localStorage.getItem('theme') === 'light') { document.documentElement.setAttribute('data-theme', 'light'); }`n    </script>"
        $modified = $true
    }

    # Add theme toggle button before nav-cta-btn if not exists
    if ($content -notmatch "theme-toggle-btn") {
        $content = $content -replace '(<a href="https://project.broadsolutiontech.com/" target="_blank" class="nav-cta-btn">)', "<button class=`"theme-toggle-btn`" aria-label=`"Toggle Theme`"><i class=`"fas fa-sun`"></i></button>`n                `$1"
        $modified = $true
    }

    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated $($file.Name)"
    }
}
