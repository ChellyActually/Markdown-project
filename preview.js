const Converter = new showdown.Converter();

export default function mdToHtml(md){
    const result = Converter.makeHtml(md);
    return result;
}