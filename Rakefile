require 'rubygems'
require 'fileutils'

desc "Rsync site"
task :deploy do
  system("rsync -avz --delete --progress --exclude '.git' --exclude '.DS_Store' --exclude 'Rakefile' --chown=james:apache -e 'ssh -p 2222' . james@artemisia.lovedthanlost.net:/var/www/html/jamesturnbull")
  puts "Site deployed"
  puts ""
end
