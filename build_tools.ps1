$content = Get-Content -Path "d:\git\exult\msvcstuff\vs2019\expack\expack.vcxproj" -Raw
$content = $content -replace "\{7d388e0f-aa32-459f-83fd-037299591dd6\}", "{8d388e0f-aa32-459f-83fd-037299591dd7}"
$content = $content -replace "<RootNamespace>expack</RootNamespace>", "<RootNamespace>textpack</RootNamespace>"
$content = $content -replace "tools\\expack.cc", "tools\textpack.cc"

$newIncludes = @"
<ClCompile Include="..\..\..\files\utils.cc" />
    <ClCompile Include="..\..\..\usecode\msgfile.cc" />
    <ClCompile Include="..\..\..\usecode\exult_constants.cc" />
    <ClCompile Include="..\..\..\files\xmlio.cc" />
"@
$content = $content -replace '<ClCompile Include="..\\..\\..\\files\\utils.cc" />', $newIncludes

Set-Content -Path "d:\git\exult\msvcstuff\vs2019\textpack\textpack.vcxproj" -Value $content
