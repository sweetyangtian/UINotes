const fs = require('fs');
// 排除检查的文件
var excludes = ['.DS_Store']

var filehelper = {
    getFileName:(rpath) =>{
        let filenames = [];
        fs.readdirSync(rpath).forEach(file => {
            if (excludes.indexOf(file) < 0 ) {
                fullpath = rpath+"/"+file
                var fileinfo = fs.statSync(fullpath)
                if(fileinfo.isFile()){
                    if (file === 'README.md') {
                        file = '';
                    } else {
                        file = file.replace('.md', '');
                    }
                    filenames.push(file);
                }
            }
        })
        // console.log(filenames)
        filenames.sort(); // 排序
        return filenames;
    },
    gitSidebar:(filePath, name)=>{
        let allFile = this.getFileName(filePath);
        console.log('gitSidebar--allFile')
        console.log(allFile)
        return allFile
    }
}
module.exports = filehelper;