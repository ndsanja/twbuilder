import gsap from 'gsap';

export function tweenMe(node: any) {
	const tl = gsap.timeline({
		onComplete: tweenComplete
	});
	const duration = 5;

	tl.to(node, {
		duration,
		opacity: 1
	}).from(
		node,
		{
			duration,
			xPercent: 100,
			rotation: -90,
			yPercent: 100,
			ease: 'bounce.out'
		},
		`-=${duration * 0.75}`
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
