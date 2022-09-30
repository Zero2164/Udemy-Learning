#parameters
param([string]$dir="0")



#functions
function Get-DirInfo ($dir) 
{
   $results = Get-ChildItem $dir -Recurse | Measure-Object -Property length -Sum
    ""
    ""
    "The size of ' $dir ' directory is:"
    $calc = [math]::Round(($results).sum/1GB,9)
    ("$calc GB").PadLeft(20)
    ""
    ""
}


#main processing
Get-DirInfo $dir
