import Spinnies from "spinnies";

const spinnies = new Spinnies();

export async function runTask(description, processOutput) {
	if (process.stdout.isTTY) {
		spinnies.add(description);
	} else {
		console.log(`         ${ description }...`);
	}

	processOutput.quiet();

	try {
		await processOutput;

		if (process.stdout.isTTY) {
			spinnies.succeed(description);
		} else {
			console.log(`[  OK  ] ${ description }.`);
		}
	} catch(error) {
		if (process.stdout.isTTY) {
			spinnies.fail(description);
		} else {
			console.log(`[FAILED] ${ description } !`);
		}

		process.stdout.write(error.stdout);
		process.stderr.write(error.stderr);
		throw error;
	}
}
