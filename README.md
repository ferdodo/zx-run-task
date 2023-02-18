# zx-run-task

Handle zx commands as tasks, which only displays spinners unless the task fails.

```js
	import { runTask } from "zx-run-task";

	await runTask('Download example image', $`wget https://example.com/image.png`);
```
