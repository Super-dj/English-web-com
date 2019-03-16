/**
 * author: Tan Jun
 * createTime: 2018/12/18
 * describe: FTFormat
 **/

export function FTGetFileType(str) {
  let fileType;
  switch (true) {
    case str.indexOf(".png") > -1: {
      fileType = "png";
      break;
    }
    case str.indexOf(".jpg") > -1: {
      fileType = "jpg";
      break;
    }
    case str.indexOf(".svg") > -1: {
      fileType = "jpg";
      break;
    }
  }
  return fileType;
}
