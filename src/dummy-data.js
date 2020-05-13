const dummyData = [
	{
		username: 'philzcoffee',
		thumbnailUrl:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAYFBMVEX///8AAACHh4ecnJzz8/MSEhJTU1N3d3f7+/v39/eXl5dNTU2Tk5NcXFy7u7s3NzeBgYHn5+fLy8uurq5kZGQJCQlGRkanp6fExMTW1tYmJiYdHR1tbW0sLCwYGBg9PT3lA1+vAAAC40lEQVRogeWa6ZajIBCFwaCNa9y3bO//lq0CLrE7uHDnzJy5f/p0TvALVFFUFRLyX6rJXDQievloRlbQEIxorpQ6YIZFKb0xKIL7HYNGUIZ77RkllEEcip9IMDAolJEIxhUKyQXkjmRwwaAWElJLSIyEVBIC3e6ehBR/AkKRQUUtF3QzpgqST5+5xo8V+rZeLKCBaQYJFaQa/m0o4uxSG0UEFn6j9GIeQh5z0/cmQkCi+VTSpQuYkz+byhCTEwCkUZCHJEIicqAoqVy8BkFpJeSLiH0DScDUtn8SGcwQViGlpCTSQjUCUk1G4UX3N0NAZDYxWLxEhWT2FCdXHyRfKJuwdgz3HLVR1HL1E+gCps0hkHo6HG1agk7iPpjcBr/NbUQQ7nXpGF7/+1lQoSq6gMapMAPGGL0Y7tH/niyAVjkTBah9hxQAyOsdYgMgq0oZAfHfIa1+zG6tKqYXALJKNHz9mN1qc8dxcisaz7ZQP+a4fJlx3JGQzjxD1I6xENr2a+bpv3dOLy4OJKyCWflhULmXZVkw+q07lbcGJV03EZ2yLgFJPn//kNT24EPPj8aEASHSq8pZ4WlMUxAWRZo9ds0MauqNCVsUiN04FRbCq24IH55KSlFthgTgXmOSycVhZY1+Zk7TaWKJD2pAHPYUQxaBRT8z00aRJnHVjx+czfB2FPkQGzsMLQccjh7hSTTbfKmYWP37iAO654vcZCyUjUKWmtoKsIOrnNXiHJFGduFk2bio9CN2q3y/lOSm4/3D+6En1ujHbdKzbf24Sn+pMgP9AzYo09SwJnJi7SWLAbNsuCVkZymbbiLZuVIl3NZT4M4JxvZLr+M+tqdh2JT65/2gcGe/MNtfqT729z3dap+bXQ+2VuvtHpCnxxDDdDLf1iuMzvbxXKYT/P2SY2q8ixF9hBgq61ZdqKXMpMQaf05MZBPadwPc6muueMvU7osh1v7Lrg1WMvAqQBQ6n2X9pTsFp2892SjPv9+/AwAAAABJRU5ErkJggg==',
		imageUrl:
			'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
		likes: 400,
		timestamp: 'July 17th 2017, 12:42:40 pm',
		comments: [
			{
				username: 'philzcoffee',
				text: "We've got more than just coffees!"
			},
			{
				username: 'biancasaurus',
				text: 'Looks delicious!'
			},
			{
				username: 'martinseludo',
				text: "Can't wait to try it!"
			},

			{
				username: 'smartDoggies',
				text: 'gimme those!'
			}
		]
	},
	{
		username: 'twitch',
		thumbnailUrl:
			'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
		imageUrl:
			'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
		likes: 4307,
		timestamp: 'July 15th 2017, 03:12:09 pm',
		comments: [
			{
				username: 'twitch',
				text: 'Epic Street Fighter action here in Vegas!'
			},
			{
				username: 'michaelmarzetta',
				text: 'Omg that match was crazy'
			},
			{
				username: 'themexican_leprechaun',
				text: 'What a setup'
			},
			{
				username: 'dennis_futbol',
				text: 'Its that injustice'
			},

			{
				username: 'coolCatz',
				text: ' @twitch  I can take them!'
			}
		]
	},
	{
		username: 'SmartDoggies',
		thumbnailUrl:
			'data:image/jpeg;base64,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',
		imageUrl:
			'https://images.ladbible.com/thumbnail?type=jpeg&url=http://beta.ems.ladbiblegroup.com/s3/content/64dcad075e73d9f8bb5abb05a5406268.png&quality=70&width=720',
		likes: 4083,
		timestamp: 'July 17th 2017, 12:42:40 pm',
		comments: [
			{
				username: 'coolCatz',
				text: " @smartDoggies You don't look very smart to me."
			},
			{
				username: 'philzcoffee',
				text: 'What a smart looking doggie, you look like you could use a cup of Philz Coffee!'
			},
			{
				username: 'coolCatz',
				text: ' @philzcoffee  Animals cannot have coffee!'
			}
		]
	},
	{
		username: 'coolCatz',
		thumbnailUrl: 'https://image.shutterstock.com/image-vector/cute-sad-grumpy-cat-material-600w-406208077.jpg',
		imageUrl:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg',
		likes: 842,
		timestamp: 'July 17th 2017, 12:42:40 pm',
		comments: [
			{
				username: 'philzcoffee',
				text: 'Free coffee for cats!'
			},
			{
				username: 'coolCatz',
				text: " @philzcoffee Im a cat, I can't have coffee..."
			},
			{
				username: 'arn-foto',
				text: "That is one cool lookin' cat!"
			}
		]
	}
];

export default dummyData;
