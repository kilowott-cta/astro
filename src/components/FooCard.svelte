<script>
    import { onMount } from "svelte";

    let user = null;

    onMount(async() => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            user = data.results[0];
        } catch(error) {
            console.error('Error fetching user: ', error);
        }
    });
</script>

<div class="flex items-center justify-center h-screen">
    {#if user}
    <div class="bg-white rounded shadow p-6 w-80">
        <img src={user.picture.large} alt="User" class="w-25 h-25 rounded-full mx-auto mb-4" />
        <h2 class="text-xl font-semibold mb-2">
            {user.name.first}
            {user.name.last}
        </h2>
        <p class="text-gray-600">{user.email}</p>
        <p class="text-gray-600 mt-1">
            {user.location.street.number}
            {user.location.street.name}
        </p>
        <p class="text-gray-600">
            {user.location.city}, {user.location.country}
        </p>
    </div> 
    {:else}
    <p>Loading...</p>
    {/if}
</div>