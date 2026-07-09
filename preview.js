const Converter = new showdown.Converter();

function mdToHtml(md){
    const result = Converter.makeHtml(md);
    return result;
}