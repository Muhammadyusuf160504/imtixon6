function DarcMode() {
  return (
    <div className="flex justify-between w-full max-w-6xl p-5 mr-auto ml-auto">
      <h1>Mode</h1>
      <ol className="flex gap-3">
        <li className="header-bg w-6 bg-violet-800"></li>
        <li className="header-bg w-6 bg-yellow-700"></li>
        <li className="header-bg w-6 bg-gray-900"></li>
        <li className="header-bg w-6 bg-green-800"></li>
      </ol>
    </div>
  );
}

export default DarcMode;
