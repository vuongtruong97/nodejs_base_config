import Handlebars from 'handlebars/runtime.js';

const handlebarHelper = {
    sum: (a, b) => a + b,
    capitalize: (string) => string.toUpperCase(),
    sortable: (field, sort) => {
        const targetFieldType = sort.column === field ? sort.type : 'default';
        const icons = {
            default: 'fa-sort',
            asc: 'fa-arrow-down-short-wide',
            desc: 'fa-arrow-up-wide-short',
        };
        const types = {
            default: 'asc',
            asc: 'desc',
            desc: 'asc',
        };
        const icon = icons[targetFieldType];
        const type = types[targetFieldType];
        let href = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`
        );
        let output = `<a href='${href}' title='Sắp xếp'><i  class='fa-solid ${icon}'></i></a>`;
        return new Handlebars.SafeString(output);

        // dropdown sort
        // return new Handlebars.SafeString(
        //     `<div class="btn-group ml-2">
        //         <button type="button" class="btn btn-sm btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        //         </button>
        //         <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(125px, 31px, 0px); top: 0px; left: 0px; will-change: transform;">
        //             <a class="dropdown-item" href="?_sort&column=${field}&type=desc">A > Z</a>
        //             <a class="dropdown-item" href="?_sort&column=${field}&type=asc">Z > A</a>
        //         </div>
        //     </div>`
        // );
    },
};
export default handlebarHelper;
