#udemy doesn't allow .ps1 extensions so I saved this as a .txt file. Make sure you save it as a ps1 

#Parameters
#The script should take 2 arguments $source and $destination (for the source and destination folders).
param([string]$source, [string]$destination)

#Functions
#2)	Functions
#Create a function named CheckFolder that checks for the existence of a specific directory/folder that is passed 
#to it as a parameter. Also, include a switch parameter named create. If the directory/folder does not exist and 
#the create switch is specified, a new folder should be created using the name of the folder/directory that was 
#passed to the function.
function checkFldr ($source, [switch]$create) 
{

        function falseDir 
        {
            ""
            ""
            "Unfortunately I could not find the following directory:"
            "'$source'"
            ""
            "If you wish to create that folder in the current or absolute path specified."
            "Please, re-excecute the script and accept the prompt"
            ""
            ""
        }


        $ifFldr = Test-Path $source
        if ($create.IsPresent -and $ifFldr -eq $false)
        {
            "Ok Master, I could not locate the following directory:"
            "'$source'"
            ""
            "Would you like me to create it for you?"
            ""
            ""
            $confirmation = mkdir $source -Confirm
            
            if($confirmation) 
            {
                ""
                ""
                "Ok Master, creating the directory now...."
                DisplFldrStats $source 'true'
            } 
            elseif ($confirmation -eq $false)
            {
                falseDir
            }
            
            ""
            ""
        } 
        elseif ($ifFldr)
        {
            DisplFldrStats $source
        } 
        elseif ($ifFldr -eq $false -and $create -eq $false)
        {
            falseDir 
        }
    }



#Create a function named DisplayFolderStatistics to display folder statistics for a directory/path that is passed 
#to it. Output should include the name of the folder, number of files in the folder, and total size of all files in 
#that directory.
function DisplFldrStats ($dir, $tru)
{
            
            ""
            ""
            if($tru -eq 'true') 
            {
                "Ok, below are details about the new directory/folder created at the following path:"
            } 
            elseif ($tru -eq 'dest')
            {
                ""
            }
            else 
            {
                "Below are details about the following directory/folder:"            
            }
            "'$dir'"
            ""
            $findName = (Get-Item $dir).Name
            $results = Get-ChildItem $dir -Recurse | Measure-Object -Property length -sum
            $calc = [math]::Round(($results).sum/1GB,5) | Out-String
            $findsubFldrLgth = (Get-ChildItem $dir | Measure-Object -Property Attributes -Sum).Count
            $findDateCreatd = (Get-Item $dir).CreationTime
            "-----------------------------------------------------------------------"            
            " FolderName: $findName "
            ""
            " Number of Items Within: $findsubFldrLgth "
            ""
            " Date Created: $findDateCreatd "
            ""
            " FolderSize[GB]: $calc "
            "------------------------------------------------------------------------"            
            ""
            ""
}



#3)	Main processing


function cpyItem ($source, $destination) 
{
    cls
    ""
    ""
    #c-i) Display a message when copying a file. The message should list where the file is being
    #moved from and where it is being moved to.
    "Copying Items Now to the following directory..."
    ""
    foreach ($file in (Get-ChildItem -File $source)) 
    {
        $newpath = "$($destination)\$($file.extension.trimstart('.'))" 
        md $newpath -force 
        #c) Copy each file to the appropriate destination.
        #get all the files that need to be copied
        Copy-Item $file -Recurse $newpath
    }
    #d) display each target folder name with the file count and byte count for each folder.
    
    
    $dirs = dir $destination | ? {$_.PSIsContainer}
    foreach($tempDir in $dirs)
    {
       DisplFldrStats $tempDir.FullName
    }
    
    ""
    ""
    "...All Done. Here is the details about destination directory."
    DisplFldrStats $destination 'dest'
    ""
    ""
    Read-Host -Prompt "All tasks complete. I bid you a farewell, Master. (u.u)/ 'PRESS ENTER TO EXIT'"
    ""
    ""
    ""
} 

function dirTool ($source, $destination)
{
    cls
    ""
    ""
    "Hello Master, welcome to what I dub the 'Directory Tool', where you can:"
    ""
    " > Check specified source & destination directory/folder info."
    " > Create new destination directories/folders if the path doesn't exist."
    " > Copy items from a source to a destination directory/folder."
    ""
    "Lets Start by specifying a Source Directory:"
    ""
    $source = Read-Host -Prompt "Enter Source Directory" 
    ""
    ""
    "Excellent, now tell me the Destination Directory:"
    ""
    $destination = Read-Host -Prompt "Enter Destination Directory" 
    cls
    cd -Path $source
    "Thanks Master, reading both directories/folders now...."
    ""
    ""
    #a) Test for existence of the source folder (using the CheckFolder function).
    checkFldr $source
    ""
    ""
    #b) Test for the existence of the destination folder; create it if it is not found (using the CheckFolder function 
    #with the –create switch).Write-Host "Testing Destination Directory - $destination"
    checkFldr $destination -create
    ""
    ""
    "Ok Master, would you like to copy all items from the following source directory:"
    "'$source'"
    ""
    "To the following destination directory?:"
    "'$destination'"
    ""
    Write-Warning "Enter 'Y' to proceed with copying." -WarningAction Inquire
    cpyItem $source $destination

     
}
dirTool
 















