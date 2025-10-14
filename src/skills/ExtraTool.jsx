export default function ExtraTool() {
	const tools = [
		{ name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
		{ name: 'GitHub', icon: 'fab fa-github', color: '#0d1117' },
		{ name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
		{ name: 'Postman', icon: 'fas fa-paper-plane', color: '#FF6C37' },
		{ name: 'Redis', icon: 'fas fa-database', color: '#DC382D' },
		{ name: 'Vercel', icon: 'fab fa-vimeo-v', color: '#000000' },
		{ name: 'Netlify', icon: 'fas fa-cloud', color: '#00C7B7' },
		{ name: 'Railway', icon: 'fas fa-train', color: '#1E293B' },
		{ name: 'CI/CD', icon: 'fas fa-cogs', color: '#7C3AED' },
	];

	return (
		<div>
			<h4 className="text-lg font-semibold mb-4">Extra Tools</h4>
			<div className="flex flex-wrap gap-2">
				{tools.map((t, i) => (
					<span key={i} className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full" style={{ background: t.color, color: '#fff' }}>
						<i className={t.icon}></i>
						{t.name}
					</span>
				))}
			</div>
		</div>
	);
}
