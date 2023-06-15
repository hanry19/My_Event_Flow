
function domList(dom) {
    const parentNode = dom.parentNode;
    const brotherNode = parentNode.childNodes[1];
    return [dom, parentNode, brotherNode];
}

function start(dom) {
    const moveTarget = domList(dom);
    moveTarget.forEach(tag => d3.select(tag).raise().classed("active", true));
}

function drag(dom) {
    const moveTarget = domList(dom);
    const tagName = tag => tag.tagName === 'text';

    const isNotText = tag => d3.select(tag)
        .attr('x', data => data.x = d3.event.x)
        .attr('y', data => data.y = d3.event.y);

    const isText = tag => d3.select(tag)
        .attr('x', data => data.x + (data.width / 2))
        .attr('y', data => data.y + (data.height / 2));

    moveTarget.forEach(tag => tagName(tag) ? isText(tag) : isNotText(tag));
}

function end(dom) {
    const moveTarget = domList(dom);
    moveTarget.forEach(tag => d3.select(tag).classed("active", false));
}


export  {
    start,
    drag,
    end,
}

