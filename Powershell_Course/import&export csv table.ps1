$names = Import-Csv C:\Users\Kylej\Documents\GitHub\RatedC\PowershellCourse\resources\Census1000.csv
clear-host
Write-host "This is the top % of last-names that are hispanic:"
Write-host ""
($names | sort -property pcthispanic -Descending)[0] | format-table -property name, pcthispanic
Write-host ""
Write-host ""

