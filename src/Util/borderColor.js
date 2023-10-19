function borderColor (risk)  {
    let color;

    switch (risk.toLowerCase()) {
      case "low":
        color = "success";
        break;
      case "medium":
        color = "warning";
        break;
      default:
        color = "danger";
        break;
    }
    return color;
  };

  export default borderColor