$(document).ready(function() {
			$.ajax({
						url: "https://api.momence.com/api/v1/Events",
						data: {
							hostId: "14851",
							token: "3ad3539821"
						},
						success: function(response) {
							// process the response from the API
							let hostId = $("script[host_id]").attr("host_id");
							let teacherIds = $("script[teacher_ids]").attr("teacher_ids");
							let locationIds = $("script[location_ids]").attr("location_ids");
							let tagIds = $("script[tag_ids]").attr("tag_ids");
							let defaultFilter = $("script[default_filter]").attr("default_filter");
							let src = $("script[src]").attr("src");

							$("#ribbon-schedule").append(`
      <momence-host-schedule 
        host-id="${hostId}" 
        teacher-ids="${teacherIds}" 
        location-ids="${locationIds}" 
        tag-ids="${tagIds}" 
        default-filter="${defaultFilter}" 
        src="${src}"
      ></momence-host-schedule>
    `);

							const hostSchedule = document.querySelector("momence-host-schedule");

							hostSchedule.addEventListener("loaded", () => {
								const schedule = hostSchedule.shadowRoot.querySelector("#schedule");
								const filters = hostSchedule.shadowRoot.querySelector("#filters");
								const filterButtons = hostSchedule.shadowRoot.querySelectorAll(
									".btn-filter"
								);
								const events = hostSchedule.shadowRoot.querySelectorAll(".event");
								const views = hostSchedule.shadowRoot.querySelectorAll(".view");
								const viewButtons = hostSchedule.shadowRoot.querySelectorAll(
									".btn-view"
								);
								let currentView = "week";
								let currentFilter = defaultFilter;

								// apply active class to current view button
								viewButtons.forEach(button => {
									if (button.getAttribute("data-view") === currentView) {
										button.classList.add("active");
									}
								});

								// apply active class to current filter button
								filterButtons.forEach(button => {
									if (button.getAttribute("data-filter") === currentFilter) {
										button.classList.add("active");
									}
								});

								// handle click on filter button
								filterButtons.forEach(button => {
									button.addEventListener("click", e => {
										// remove active class from all filter buttons
										filterButtons.forEach(b => b.classList.remove("active"));
										// add active class to clicked button
										e.target.classList.add("active");
										// update current filter
										currentFilter = e.target.getAttribute("data-filter");
										// apply filter
										applyFilter();
									});
								});

								// handle click on view button
								viewButtons.forEach(button => {
									button.addEventListener("click", e => {
										// remove active class from all view buttons
										viewButtons.forEach(b => b.classList.remove("active"));

										// add active class to clicked button
										e.target.classList.add("active");
										// update current view
										currentView = e.target.getAttribute("data-view");
										// apply view
										applyView();
									});
								});

								const applyFilter = () => {
									events.forEach(event => {
										event.style.display = "none";
										if (currentFilter === "show-all") {
											event.style.display = "block";
										} else if (event.classList.contains(currentFilter)) {
											event.style.display = "block";
										}
									});
								};

								const applyView = () => {
									views.forEach(view => {
										view.style.display = "none";
										if (view.classList.contains(currentView)) {
											view.style.display = "block";
										}
									});
								};

								applyFilter();
								applyView();
							});
						});
			});
