<script>
    import { onMount } from "svelte";
  
    let reportText = "";
    let successMessage = "";
    let loading = false;
  
    const submitReport = async () => {
      if (reportText.trim() === "") {
        successMessage = "Please enter a report before submitting.";
        return;
      }
  
      loading = true;
      successMessage = "";
  
      try {
        const response = await fetch("/reports", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: reportText }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          successMessage = "Your report has been submitted anonymously.";
          reportText = ""; // Clear input field
        } else {
          successMessage = data.error || "Failed to submit report.";
        }
      } catch (error) {
        successMessage = "Network error. Please try again.";
      } finally {
        loading = false;
      }
    };
  </script>
  
  <div class="min-h-screen text-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Hero Section -->
      <header class="text-center mb-16 transition-all duration-700">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
          Input your reports
        </h1>
        <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
          You can input your report about the city problem here. Anonymously.
        </p>
  
        <!-- Report Form -->
        <div class="mt-8 max-w-2xl mx-auto">
          <textarea 
            bind:value={reportText}
            class="w-full p-4 text-black rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            rows="5"
            placeholder="Describe the issue..."
          ></textarea>
  
          <button 
            on:click={submitReport}
            class="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
            disabled={loading}>
            {loading ? "Submitting..." : "Submit Report"}
          </button>
  
          <!-- Success Message -->
          {#if successMessage}
            <p class="mt-4 text-green-400">{successMessage}</p>
          {/if}
        </div>
      </header>
    </div>
  </div>
  
  <style>
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
  </style>
  