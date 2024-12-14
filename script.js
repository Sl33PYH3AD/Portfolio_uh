// $(document).ready(
//     () => $("header").height($(window).height())
// );

// console.log($(window).height());


$("body").prepend(`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img  class="logo">^-^
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
				aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#">works</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">bio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">contacts</a>
					</li>
					</ul>
				</div>
		</div>
	</nav>`);

$("nav").after(`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img  class="logo">^-^
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
				aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#">works</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">bio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">contacts</a>
					</li>
					</ul>
				</div>
		</div>
	</nav>`);
