export default function stringToSlug(string){
    string = string.replace(/^\s+|\s+$/g, '');
    string = string.toLowerCase();
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l = from.length; i < l; i++) {
        string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    let slug = string.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-') 
    .replace(/-+/g, '-'); 

    return slug;
}