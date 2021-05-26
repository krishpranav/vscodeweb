import { create, IWorkbenchConstructionOptions, IWorkspaceProvider, IWorkspace } from 'vs/workbench/workbench.web.api';
import { URI, UriComponents } from 'vs/base/common/uri';
declare const window: any;

(async function() {
    let config: IWorkbenchConstructionOptions & { folderUri?: UriComponents, workspaceUri?: UriComponents } = {};

    if (window.product) {
        config = window.product
    } else {
        const result = await fetch('/product.json')
        config = await result.json();
    }
})