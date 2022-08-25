import gsap from 'gsap';

export function tweenMe(node: any) {
	const tl = gsap.timeline({
		onComplete: tweenComplete
	});
	const duration = 1;

	tl.fromTo(
		node,
		{
			opacity: 0
		},
		{ opacity: 1, duration: duration * 3 }
	).from(
		node,
		{
			duration: duration * 3,
			xPercent: 100,
			rotation: -90,
			yPercent: 100,
			ease: 'bounce.out'
		},
		`-=${duration * 3 * 0.75}`
	);

	function tweenComplete() {
		node.dispatchEvent(new CustomEvent('tweenComplete'));
	}

	return {
		destroy() {
			tl.clear();
		}
	};
}
