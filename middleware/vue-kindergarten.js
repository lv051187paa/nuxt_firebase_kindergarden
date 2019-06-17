import { createSandbox } from 'vue-kindergarten';
import RouteGoverness from '@/kindergarden/governesses/RouteGoverness';
import secretPerimeter from '@/kindergarden/perimetr/secretPerimeter';

import child from '@/kindergarden/child';

export default context => {
	  const { route, error, redirect, store, isServer } = context;
	//   console.log(route);
	route.matched.some(routeRecord => {
		//     const options = isServer ? routeRecord.components.default : routeRecord.components.default.options;
		//     const perimeter = options.routePerimeter;
		//     const Governess =  options.routeGoverness || RouteGoverness;
		//     const action = options.routePerimeterAction || 'route';
		// if (perimeter) {
			const sandbox = createSandbox(child(store), {
                perimeters: [secretPerimeter],
                governess: new RouteGoverness()
			});

			
		// }

		      return sandbox.guard('route', { redirect });
		//     }
	});

	// router.beforeEach((to, from, next) => {
	//     const perimeter = perimeters[`${to.name}Perimeter`];

	//     if (perimeter) {
	//       const sandbox = createSandbox(child(store), {
	//         perimeters: [
	//           perimeter,
	//         ],
	//       });

	//       if (!sandbox.isAllowed('route')) {
	//         return next('/');
	//       }
	//     }

	//     return next();
	//   });
};
