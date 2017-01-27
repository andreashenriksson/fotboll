var teams = [
	{	
		initials: "bik";
		name: "Borgunda IK";
		logo: "logos/bik.gif";
	}
	{
		initials: "gif";
		name: "Grolanda IF";
		logo: "logos/gif.gif";
	}
	{
		initials: "ffk";
		name: "Falköpings FK";
		logo: "logos/ffk.png";
	}
	{
		initials: "fkik";
		name: "Falköpings KIK";
		logo: "logos/fkik.png";
	}
	{
		initials: "fif";
		name: "Floby IF";
		logo: "logos/fif.png";
	}
	{
		initials: "ifk";
		name: "IFK Falköping FF";
		logo: "logos/ifk.png";
	}
	{
		initials: "ks";
		name: "Kinnarp Slutarps IF";
		logo: "logos/ks.gif";
	}
	{
		initials: "sif";
		name: "Stenstorps IF";
		logo: "logos/sif.gif";
	}
	{
		initials: "tif";
		name: "Tomtens IF";
		logo: "logos/tif.png";
	}
	{
		initials: "vif";
		name: "Valtorps IF";
		logo: "logos/vif.gif";
	}
	{
		initials: "vsk";
		name: "Vartofta SK";
		logo: "logos/vsk.gif";
	}
	{
		initials: "as";
		name: "Åsarp Trädets IF";
		logo: "logos/as.gif";
	}
];

teamslength = teams.length;
text = "<id=\"ul-nav\">";
for (i = 0; i < teamslength; i++) {
    text += "<li class=\"team\"><a href=\"#\"><img src=\"teams[i].logo\"></a></li>";
}
text += "</ul>";
document.getElementById("fixed-nav").innerHTML = text;
