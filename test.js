let subject = require('/Users/urmilparikh/csc519_testgeneration/TestGeneration/subject.js')
let mock = require('mock-fs');
try { subject.inc(-1, undefined); } catch (e) {} 
try { subject.inc(-1, NaN); } catch (e) {} 
try { subject.inc(1, undefined); } catch (e) {} 
try { subject.inc(1, NaN); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 41, 'uwerw'); } catch (e) {} 
try { subject.weird(6, -1, 41, 'velqu'); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 43, 'uwerw'); } catch (e) {} 
try { subject.weird(6, -1, 43, 'velqu'); } catch (e) {} 
try { subject.weird(6, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 41, 'uwerw'); } catch (e) {} 
try { subject.weird(6, 1, 41, 'velqu'); } catch (e) {} 
try { subject.weird(6, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 43, 'uwerw'); } catch (e) {} 
try { subject.weird(6, 1, 43, 'velqu'); } catch (e) {} 
try { subject.weird(6, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 41, 'uwerw'); } catch (e) {} 
try { subject.weird(8, -1, 41, 'velqu'); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 43, 'uwerw'); } catch (e) {} 
try { subject.weird(8, -1, 43, 'velqu'); } catch (e) {} 
try { subject.weird(8, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 41, 'uwerw'); } catch (e) {} 
try { subject.weird(8, 1, 41, 'velqu'); } catch (e) {} 
try { subject.weird(8, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 43, 'uwerw'); } catch (e) {} 
try { subject.weird(8, 1, 43, 'velqu'); } catch (e) {} 
try { subject.weird(8, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 43, 'NEQ - strict'); } catch (e) {} 
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('file', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('emptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'emptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'nonEmptyDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('nonEmptyDir', 'file');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('140-844-6133', '', ''); } catch (e) {} 
try { subject.format('140-844-6133', '', {}); } catch (e) {} 
try { subject.format('140-844-6133', '', {"normalize":true}); } catch (e) {} 
try { subject.format('140-844-6133', '', {"normalize":false}); } catch (e) {} 
try { subject.blackListNumber('631-317-7960'); } catch (e) {} 
try { subject.blackListNumber('212-317-7960'); } catch (e) {} 
