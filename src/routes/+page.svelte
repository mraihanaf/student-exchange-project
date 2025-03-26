<script>
	import { onMount } from 'svelte';
	
	let isVisible = false;
	
	onMount(() => {
	  isVisible = true;
	});
  </script>
	
  <div class="min-h-screen max-w-full text-white">
	<div class="container mx-auto px-4 py-12">
	  <!-- Hero Section -->
	  <header class="text-center mb-16 transition-all duration-700 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
		<h1 class="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
		  Implementing GenAI into digital citizen reports 
		</h1>
		<p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
		  AI-powered fools report detection, and filtering for city facility reports. Because real problems deserve real attention.
		</p>
	  </header>
	  
	  <!-- Value Proposition -->
	  <section class="max-w-4xl mx-auto mb-16 bg-slate-800/50 p-8 rounded-xl shadow-lg transition-all duration-700 delay-100 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
		<h2 class="text-2xl font-bold mb-4 text-teal-400">We Provide Solution For Digital Citizens Reporting System.</h2>
		<p class="text-slate-300 mb-6">
		  This solution was provided for JAKI App, This saves valuable city resources by automatically filtering out fools report from legitimate facility reports. Amazon bedrock analyzes reports in milliseconds, letting city workers focus on real issues that matter.
		</p>
		
		<div class="bg-slate-700/50 p-4 rounded-lg">
		  <pre class="text-sm text-cyan-300 overflow-x-auto">
  {`{
	"report_category": "infrastructure",
	"report_priority": "critical",
	"report_summary": "A streetlight near the main square has fallen after last night’s storm. Wires are exposed, and it's blocking the road.",
	"report_false_indicator": null
	"report_verdict": "legit"
  }`}
		  </pre>
		</div>
	  </section>
	  
	  <!-- Features -->
	  <section class="grid md:grid-cols-3 gap-8 mb-16">
		<div class="bg-slate-800/50 p-6 rounded-xl shadow-lg transition-all duration-700 delay-200 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
		  <div class="text-teal-400 text-4xl mb-4">🕵️</div>
		  <h3 class="text-xl font-bold mb-2">Fools & Hoax Detection</h3>
		  <p class="text-slate-300">
			Our AI can detect and categorize citizens reports data.
		  </p>
		</div>
		
		<div class="bg-slate-800/50 p-6 rounded-xl shadow-lg transition-all duration-700 delay-300 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
		  <div class="text-teal-400 text-4xl mb-4">🧠</div>
		  <h3 class="text-xl font-bold mb-2">Smart Classification</h3>
		  <p class="text-slate-300">
			Automatically categorizes reports and assigns priority levels. The right teams get the right alerts, instantly.
		  </p>
		</div>
		
		<div class="bg-slate-800/50 p-6 rounded-xl shadow-lg transition-all duration-700 delay-400 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
		  <div class="text-teal-400 text-4xl mb-4">🔌</div>
		  <h3 class="text-xl font-bold mb-2">City App Integration</h3>
		  <p class="text-slate-300">
			Seamlessly plugs into existing city reporting systems. No reinventing the wheel, just supercharging it.
		  </p>
		</div>
	  </section>
	  
	  <!-- JSON Output Example -->
	  <section class="max-w-4xl mx-auto mb-16 transition-all duration-700 delay-500 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
		<h2 class="text-2xl font-bold mb-6 text-center text-teal-400">How It Works</h2>
		
		<div class="flex flex-col md:flex-row items-center justify-center gap-8">
		  <div class="bg-slate-800/50 p-6 rounded-xl shadow-lg flex-1">
			<p class="italic text-slate-400 mb-4">"There's a giant crocodile in the sewers eating people!"</p>
			<div class="flex items-center">
			  <div class="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">!</div>
			  <p class="ml-3 text-red-400">Detected as likely false</p>
			</div>
		  </div>
		  
		  <div class="text-2xl rotate-90 lg:rotate-0 lg:text-4xl">→</div>

		  <div class="bg-slate-800/50 p-6 rounded-xl shadow-lg flex-1">
			<p class="italic text-slate-400 mb-4">"Street light broken at Jalan Sudirman, near bus stop #42."</p>
			<div class="flex items-center">
			  <div class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">✓</div>
			  <p class="ml-3 text-green-400">Detected as legitimate</p>
			</div>
		  </div>
		</div>
	  </section>
	  
	  <!-- Call to Action -->
	  <section class="text-center max-w-2xl mx-auto transition-all duration-700 delay-600 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
		<h2 class="text-3xl font-bold mb-6 text-white">How can AI improve citizen reporting? Experience it yourself!</h2>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
		  <a href="/form" class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-bold hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-cyan-500/20">
			See the Demo
		  </a>
		  <a href="https://github.com/mraihanaf/student-exchange-project" class="px-8 py-3 bg-slate-700 rounded-lg font-bold hover:bg-slate-600 transition-all flex items-center justify-center gap-2 shadow-lg">
			<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
			</svg>
			View on GitHub
		  </a>
		</div>
		
		<p class="mt-8 text-slate-400">
		  Built for the 2025 Singapore - Indonesia Student Exchange Program
		</p>
	  </section>
	</div>
  </div>
  
  <style>
	@keyframes float {
	  0% { transform: translateY(0px); }
	  50% { transform: translateY(-10px); }
	  100% { transform: translateY(0px); }
	}
  </style>