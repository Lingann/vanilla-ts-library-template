/**
 * 检查IE版本号
 * @returns
 */
export function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isIE =
    userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isIE11 =
    userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6; //IE版本<=7
    }
  } else if (isEdge) {
    return "edge"; //edge
  } else if (isIE11) {
    return 11; //IE11
  } else {
    return -1; //不是ie浏览器
  }
}

/**
 * 手机端检查
 * @returns
 */
export function isMobile() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || (window as any).opera);
  return check;
}

/**
 * 获取浏览器信息
 * @returns
 */
export function getBrowserInfo() {
  const userAgentString =
      (window.navigator && window.navigator.userAgent) || "",
    match2 = userAgentString.match(
      /Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Mobile/
    );
  const browsers = [
    ["Edge", /Edge\/([0-9\._]+)/],
    ["Yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["Chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["Crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["Firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["Opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["Opera", /OPR\/([0-9\.]+)(:?\s|$)$/],
    ["IE", /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],
    ["IE", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["IE", /MSIE\s([6-8]\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["Android", /Android\s([0-9\.]+)/],
    ["IOS", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["Safari", /Version\/([0-9\._]+).*Safari/],
    ["UCBrowser", /UCBrowser\/([0-9\._]+)/],
  ];
  let info: {
    browser: string;
    version: string;
    mobile: string | boolean;
  } = {
    browser: "",
    version: "",
    mobile: isMobile(),
  };
  for (let i = 0; i < browsers.length; i++) {
    const regexp = browsers[i][1] as RegExp;
    if (regexp.test(userAgentString)) {
      const match = regexp.exec(userAgentString);
      const version: string[] = match ? match[1].split(/[._]/).slice(0, 3) : [];
      if (version.length < 3) {
        version.length = 3;
        version[2] = "0";
      }

      info.browser = `${browsers[i][0]}`;
      info.version = version[0];
      info.mobile =
        isMobile() ||
        browsers[i][0] == "Android" ||
        browsers[i][0] == "IOS" ||
        browsers[i][0] == "bb10" ||
        (match2 && match2[0]) ||
        false;
    }
  }
  return info;
}
