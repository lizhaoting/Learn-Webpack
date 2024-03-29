var loaderUtils = require('loader-utils');
var SourceNode = require('source-map').SourceNode;
var SourceMapConsumer = require('source-map').SourceMapConsumer;
module.exports = function(content, sourceMap) {
    console.log('content', content);
    console.log('sourceMap', sourceMap);
    if (this.cacheable) this.cacheable();

    var useStrictPrefix = '\'use strict\';\n\n';

    var options = loaderUtils.getOptions(this) || {};

    if (options.sourceMap && sourceMap) {
        var currentRequest = loaderUtils.getCurrentRequest(this);
        var node = SourceNode.fromStringWithSourceMap(content, new SourceMapConsumer(sourceMap))
        node.prepend(useStrictPrefix);
        var result = node.toStringWithSourceMap({
            file,
            currentRequest
        });
        var callback = this.async();
        callback(null, result.code, result.map.toJSON());
    }
    return useStrictPrefix + content;
}